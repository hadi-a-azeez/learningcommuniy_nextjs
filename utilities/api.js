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
export const getSchedulesCountSingle = async () => {
  const { data, error, count } = await supabase
    .from("schedules")
    .select("id", { count: "exact" })
    .eq("booked_by", 2);
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
export const getMemberDetails = async (id) => {
  const { data, error } = await supabase
    .from("members")
    .select(`*,stream(stream)`)
    .eq("id", id);
  if (error) console.log(error);
  else return data;
};
export const getAllVolunteers = async () => {
  const { data, error } = await supabase.from("volunteers").select("*");
  if (error) console.log(error);
  else return data;
};
export const getAllSchedules = async () => {
  const { data, error } = await supabase.from("schedules").select("*");
  if (error) console.log(error);
  else return data;
};
