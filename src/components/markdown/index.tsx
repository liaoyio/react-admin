import 'highlight.js/styles/base16/tomorrow-night.css';
import ReactMarkdown from 'react-markdown';

// markdown plugins
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'; // add support for strikethrough, tables, tasklists and URLs directly

import { useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/common/theme/hooks';
import StyledMarkdown from './styles';

export default function Markdown({ children }: any) {
  const token = useThemeToken();
  const { themeMode } = useSettings();
  return (
    <StyledMarkdown $token={token} $thememode={themeMode}>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      >
        {children}
      </ReactMarkdown>
    </StyledMarkdown>
  );
}
