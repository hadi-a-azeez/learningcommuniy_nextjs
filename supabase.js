import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xzoykwvsufhkrpqcdfjy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTUxMTk1OSwiZXhwIjoxOTM3MDg3OTU5fQ.7NoVLD28LDU4V6r2Yho1xZs1XOFztHfC_e4yjByEV6g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
