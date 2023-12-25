import styled from 'styled-components';

export const StyledUpload = styled.div<{ display?: string }>`
  .ant-upload {
    border: none !important;
  }
  .ant-upload-list {
    display: ${(props) => props.display};
    flex-wrap: wrap;
  }
`;

export const StyledUploadAvatar = styled.div`
  transform: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .ant-upload,
  .ant-upload-select {
    border: none !important;
  }
`;

export const StyledUploadBox = styled.div`
  .ant-upload {
    border: none !important;
  }
  .ant-upload-list {
    display: none;
  }
`;
