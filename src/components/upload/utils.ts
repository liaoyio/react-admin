// Define more types here
const FORMAT_PDF = ['pdf'];
const FORMAT_TEXT = ['txt'];
const FORMAT_PHOTOSHOP = ['psd'];
const FORMAT_WORD = ['doc', 'docx'];
const FORMAT_EXCEL = ['xls', 'xlsx'];
const FORMAT_ZIP = ['zip', 'rar', 'iso'];
const FORMAT_ILLUSTRATOR = ['ai', 'esp'];
const FORMAT_POWERPOINT = ['ppt', 'pptx'];
const FORMAT_AUDIO = ['wav', 'aif', 'mp3', 'aac'];
const FORMAT_IMG = ['jpg', 'jpeg', 'gif', 'bmp', 'png', 'svg'];
const FORMAT_VIDEO = ['m4v', 'avi', 'mpg', 'mp4', 'webm'];

const iconUrl = (icon: string) => `src/assets/icons/${icon}.svg`;

/**
 * 获取文件后缀
 * @param fileName
 */
export function fileFormat(fileName: string | undefined) {
  let format;
  switch (true) {
    case FORMAT_PDF.includes(fileTypeByName(fileName)):
      format = 'pdf';
      break;
    case FORMAT_TEXT.includes(fileTypeByName(fileName)):
      format = 'txt';
      break;
    case FORMAT_PHOTOSHOP.includes(fileTypeByName(fileName)):
      format = 'psd';
      break;
    case FORMAT_WORD.includes(fileTypeByName(fileName)):
      format = 'word';
      break;
    case FORMAT_EXCEL.includes(fileTypeByName(fileName)):
      format = 'excel';
      break;
    case FORMAT_ZIP.includes(fileTypeByName(fileName)):
      format = 'zip';
      break;
    case FORMAT_ILLUSTRATOR.includes(fileTypeByName(fileName)):
      format = 'ai';
      break;
    case FORMAT_POWERPOINT.includes(fileTypeByName(fileName)):
      format = 'ppt';
      break;
    case FORMAT_AUDIO.includes(fileTypeByName(fileName)):
      format = 'audio';
      break;
    case FORMAT_IMG.includes(fileTypeByName(fileName)):
      format = 'img';
      break;
    case FORMAT_VIDEO.includes(fileTypeByName(fileName)):
      format = 'video';
      break;
    default:
      format = fileTypeByName(fileName);
  }
  return format;
}

/**
 * 获取文件缩略图
 * @param fileName
 */
export function fileThumb(fileName: string | undefined) {
  let thumb;
  const format = fileFormat(fileName);
  switch (format) {
    case 'txt':
      thumb = iconUrl('ic_file_txt');
      break;
    case 'zip':
      thumb = iconUrl('ic_file_zip');
      break;
    case 'audio':
      thumb = iconUrl('ic_file_audio');
      break;
    case 'video':
      thumb = iconUrl('ic_file_video');
      break;
    case 'word':
      thumb = iconUrl('ic_file_word');
      break;
    case 'excel':
      thumb = iconUrl('ic_file_excel');
      break;
    case 'ppt':
      thumb = iconUrl('ic_file_ppt');
      break;
    case 'pdf':
      thumb = iconUrl('ic_file_pdf');
      break;
    case 'psd':
      thumb = iconUrl('ic_file_psd');
      break;
    case 'ai':
      thumb = iconUrl('ic_file_ai');
      break;
    case 'img':
      thumb = iconUrl('ic_file_img');
      break;
    case 'folder':
      thumb = iconUrl('ic_folder');
      break;
    default:
      thumb = iconUrl('ic_file');
  }
  return thumb;
}

export function fileTypeByName(fileName = '') {
  return (fileName && fileName.split('.').pop()) || 'folder';
}
