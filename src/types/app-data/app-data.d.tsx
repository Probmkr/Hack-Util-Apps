export interface MyAppData {
  app_name_ja: string;
  app_name_en: string;
  app_description_ja?: string;
  app_description_en?: string;
}

export interface MyAppProps {
  app_code: string;
  app_path: string;
  app_data: MyAppData;
}
