export interface DashboardFilter {
  id?: number;
  closedDeals48hPercent?: number;
  closedDeals48hOverTime?: ClosedDeals48hOverTime[];
  dealsTables?: DealsTable[];
  qualityManagerPerformances?: QualityManagerPerformance[];
  reasonsTrackings?: ReasonsTracking[];
  macroMicroIndicators?: MacroMicroIndicator[];
  solutionIndicators?: SolutionIndicator[];
  dealOrigins?: DealOrigin[];
  satisfactionAfterContacts?: SatisfactionAfterContact[];
}

interface ClosedDeals48hOverTime {
  id?: number;
  reportId?: number;
  month?: string;
  alerts?: number;
  dashboardData?: string;
}

interface DealsTable {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  dashboardData?: string;
  dealHeaders?: DealHeader[];
  rows?: DealRow[];
}

interface DealHeader {
  id?: number;
  dealsTableId?: number;
  type?: string;
  count?: number;
  color?: string;
  dealsTable?: string;
  dealRows?: DealRow[];
}

interface DealRow {
  id?: number;
  dealsTableId?: number;
  dealHeaderId?: number;
  category?: string;
  newDeals?: number;
  overdue?: number;
  escalated?: number;
  ongoing?: number;
  closed?: number;
  total?: number;
  dealsTable?: string;
}

interface QualityManagerPerformance {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  name?: string;
  alertCount?: number;
  closedPercent?: string;
  closedIn48hPercent?: string;
  avgClosingTime?: string;
  delayedPercent?: string;
  escalatedPercent?: string;
  dashboardData?: string;
}

interface ReasonsTracking {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  reason1?: string;
  reason2?: string;
  reason3?: string;
  reason4?: string;
  reason5?: string;
  quantity?: number;
  percent?: string;
  dashboardData?: string;
}

interface MacroMicroIndicator {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  macro?: string;
  micro?: string;
  quantity?: number;
  percent?: string;
  dashboardData?: string;
}

interface SolutionIndicator {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  solution?: string;
  quantity?: string;
  percent?: string;
  dashboardData?: string;
}

interface DealOrigin {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  month?: string;
  closedAlerts?: number;
  valid?: string;
  invalid?: string;
  dashboardData?: string;
}

interface SatisfactionAfterContact {
  id?: number;
  reportId?: number;
  dashboardDataId?: number;
  month?: string;
  yes?: number;
  no?: number;
  dashboardData?: string;
}
