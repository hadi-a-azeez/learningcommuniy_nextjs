import supabase from "../supabase";

export const getMembersCount = async () => {
  const { data, error, count } = await supabase
    .from("members")
    .select("id", { count: "exact" });
  if (error) console.log(error);
  else return count;
};
