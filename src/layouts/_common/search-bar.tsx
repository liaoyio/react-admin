import { Empty, GlobalToken, Input, InputRef, Modal } from 'antd';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useKeyPress, useBoolean } from 'ahooks';
import styled from 'styled-components';

import { IconButton, SvgIcon } from '@/components/icon';
import Scrollbar from '@/components/scrollbar';
import { useRouter } from '@/router/hooks';
import { flattenMenuRoutes, getMenuRoutes } from '@/router/utils';
import { useThemeToken } from '@/theme/hooks';

import Color from 'color';

export default function SearchBar() {
  const { t } = useTranslation();
  const { replace } = useRouter();
  const inputRef = useRef<InputRef>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [search, { toggle }] = useBoolean(false);
  const themeToken = useThemeToken();

  const flattenRoutes = useCallback(flattenMenuRoutes, []);

  const flattenedRoutes = useMemo(() => {
    const menuRoutes = getMenuRoutes();
    return flattenRoutes(menuRoutes);
  }, [flattenRoutes]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(flattenedRoutes);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    const result = flattenedRoutes.filter(
      (item) =>
        t(item.label as any)
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase()) !== -1 ||
        item.key.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,
    );
    setSearchResult(result);
    setSelectedItemIndex(0);
  }, [searchQuery, t, flattenedRoutes]);

  const handleMetaK = (event: KeyboardEvent) => {
    if (event.metaKey && event.key === 'k') {
      // https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/metaKey
      handleOpen();
    }
  };

  useKeyPress('keydown', handleMetaK);

  useKeyPress('ArrowUp', (event) => {
    if (!search) return;
    event.preventDefault();
    let nextIndex = selectedItemIndex - 1;
    if (nextIndex < 0) {
      nextIndex = searchResult.length - 1;
    }
    setSelectedItemIndex(nextIndex);
    scrollSelectedItemIntoView(nextIndex);
  });

  useKeyPress('ArrowDown', (event) => {
    if (!search) return;
    event.preventDefault();
    let nextIndex = selectedItemIndex + 1;
    if (nextIndex > searchResult.length - 1) {
      nextIndex = 0;
    }
    setSelectedItemIndex(nextIndex);
    scrollSelectedItemIntoView(nextIndex);
  });

  useKeyPress('Enter', (event) => {
    if (!search || searchResult.length === 0) return;
    event.preventDefault();
    const selectItem = searchResult[selectedItemIndex].key;
    if (selectItem) {
      handleSelect(selectItem);
      toggle();
    }
  });

  const handleOpen = () => {
    toggle();
    setSearchQuery('');
  };

  const handleCancel = () => {
    toggle();
  };

  const handleAfterOpenChange = (open: boolean) => {
    if (open) {
      // auto focus
      inputRef.current?.focus();
    }
  };

  const scrollSelectedItemIntoView = (index: number) => {
    if (listRef.current) {
      const selectedItem = listRef.current.children[index];
      selectedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleHover = (index: number) => {
    if (index === selectedItemIndex) return;
    setSelectedItemIndex(index);
  };

  const handleSelect = (key: string) => {
    replace(key);
    handleCancel();
  };

  const activeStyle: CSSProperties = {
    border: `1px dashed ${themeToken.colorPrimary}`,
    backgroundColor: `${Color(themeToken.colorPrimary).alpha(0.2).toString()}`,
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <IconButton className="h-10 w-10" onClick={handleOpen}>
          <SvgIcon icon="ic-search" size="20" />
        </IconButton>
        <IconButton className="h-6 rounded-md bg-hover text-xs font-bold">⌘K</IconButton>
      </div>
      <Modal
        open={search}
        centered
        onCancel={handleCancel}
        footer={null}
        closeIcon={false}
        afterOpenChange={handleAfterOpenChange}
        styles={{
          body: {
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
        title={
          <Input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            bordered={false}
            autoFocus
            prefix={<SvgIcon icon="ic-search" size="20" />}
            suffix={
              <IconButton className="h-6 rounded-md bg-hover text-xs" onClick={handleCancel}>
                Esc
              </IconButton>
            }
          />
        }
      >
        {searchResult.length === 0 ? (
          <Empty />
        ) : (
          <Scrollbar>
            <div ref={listRef} className="py-2">
              {searchResult.map(({ key, label }, index) => {
                const partsTitle = parse(t(label), match(t(label), searchQuery));
                const partsKey = parse(key, match(key, searchQuery));
                return (
                  <StyledListItemButton
                    key={key}
                    $themeToken={themeToken}
                    style={index === selectedItemIndex ? activeStyle : {}}
                    onClick={() => handleSelect(key)}
                    onMouseMove={() => handleHover(index)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">
                          {partsTitle.map((item) => (
                            <span
                              key={item.text}
                              style={{
                                color: item.highlight
                                  ? themeToken.colorPrimary
                                  : themeToken.colorText,
                              }}
                            >
                              {item.text}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs">
                          {partsKey.map((item) => (
                            <span
                              key={item.text}
                              style={{
                                color: item.highlight
                                  ? themeToken.colorPrimary
                                  : themeToken.colorTextDescription,
                              }}
                            >
                              {item.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StyledListItemButton>
                );
              })}
            </div>
          </Scrollbar>
        )}
      </Modal>
    </>
  );
}

const StyledListItemButton = styled.div<{ $themeToken: GlobalToken }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border-bottom: ${(props) => `1px dashed ${props.$themeToken.colorBorder}`};
  color: ${(props) => `${props.$themeToken.colorTextSecondary}`};
`;
