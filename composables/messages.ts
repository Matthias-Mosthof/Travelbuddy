export async function sendMessage(message: Message) {
  const client = await useSupabaseClient<Database>();
  try {
    await client.from('messages').insert(message).select();

    Notify.create({
      message: 'Message send succesfully!',
      type: 'positive',
    });
  } catch (error) {
    Notify.create({
      message: `Error sending message: ${error.message}`,
      type: 'negative',
    });
  }
}
