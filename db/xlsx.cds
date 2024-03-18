namespace app.xlsx;

using { cuid } from '@sap/cds/common';

entity ExcelData : cuid  {
  employeeName   : String;
  attendanceStatus: AttendanceStatus;
}

type AttendanceStatus : String enum {
  Present;
  Absent;
}