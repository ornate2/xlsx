
using app.xlsx from '../db/xlsx';

service ExcelDownloadService {

  entity ExcelData as projection on xlsx.ExcelData;

}