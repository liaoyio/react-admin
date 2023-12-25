import styled from 'styled-components';

export const StyledUpload = styled.div<{ display: string }>`
  .ant-upload-list {
    display: ${(props) => props.display};
    flex-wrap: wrap;
  }
`;
