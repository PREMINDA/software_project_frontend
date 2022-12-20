export interface DashBoardModal{
  global_deaths: number;
  global_new_cases: number;
  global_new_deaths: number;
  global_recovered: number;
  global_total_cases: number;
  hospital_data: []
  local_active_cases: number;
  local_deaths: number;
  local_new_cases: number;
  local_new_deaths: number;
  local_recovered: number;
  local_total_cases: number;
  local_total_number_of_individuals_in_hospitals: number;
  total_antigen_testing_count: number;
  total_pcr_testing_count: number;
  update_date_time: string;
}

export interface ChartData{
  active_cases_count: number;
  cases_count: number;
  date: string;
  deaths_count: number;
  recoveries_count: number;
  total_cases_count: number;
}
