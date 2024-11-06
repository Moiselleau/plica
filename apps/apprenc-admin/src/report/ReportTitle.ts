import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "description";

export const ReportTitle = (record: TReport): string => {
  return record.description?.toString() || String(record.id);
};
