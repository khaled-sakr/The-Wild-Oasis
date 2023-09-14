import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bmfvsdmssnhcsxwalbvl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtZnZzZG1zc25oY3N4d2FsYnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMDA5NjcsImV4cCI6MjAwODY3Njk2N30.zQsJb6GqRacREkTwIjp5Ep5JAAKBQSTOL8JzydH7Du8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
