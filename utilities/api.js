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
