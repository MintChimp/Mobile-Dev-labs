import supabase from './supabase';

const TABLE_NAME = 'sampledatabase';

export async function getUsers() {
  const { data, error } = await supabase.from("sampledatabase").select("*");

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  console.log("Fetched data:", data);
  return data;
}


export async function addUser(user: { name: string}) {
  const { data, error } = await supabase.from(TABLE_NAME).insert([user]);
  if (error) throw error;
  return data;
}

export async function updateUser(id: number, updates: { name: string }) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq('id', id);

  if (error) throw error;
  return data;
}

export async function deleteUser(id: number) {
  const { data, error } = await supabase.from(TABLE_NAME).delete().eq('id', id);
  if (error) throw error;
  return data;
}
