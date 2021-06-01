import supabase from "../supabase";

export const getMembersCount = async () => {
  const { data, error, count } = await supabase
    .from("members")
    .select("id", { count: "exact" });
  if (error) console.log(error);
  else return count;
};
export const getVolunteersCount = async () => {
  const { data, error, count } = await supabase
    .from("volunteers")
    .select("id", { count: "exact" });
  if (error) console.log(error);
  else return count;
};
export const getSchedulesCount = async () => {
  const { data, error, count } = await supabase
    .from("schedules")
    .select("id", { count: "exact" });
  if (error) console.log(error);
  else return count;
};
export const getAllMembers = async () => {
  const { data, error } = await supabase
    .from("members")
    .select(`*,stream(stream)`);
  if (error) console.log(error);
  else return data;
};
