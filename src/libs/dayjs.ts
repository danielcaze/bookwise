import dayjs from "dayjs";

let isConfigured = false;

async function configureDayjs() {
  if (!isConfigured) {
    await import("dayjs/locale/pt-br");
    const module = await import("dayjs/plugin/relativeTime");
    dayjs.extend(module.default);
    dayjs.locale("pt-br");
    isConfigured = true;
  }
}

type dayjsDate = string | number | dayjs.Dayjs | Date | null | undefined;

export async function getRelativeTime(date: dayjsDate) {
  await configureDayjs();
  return dayjs(date).fromNow();
}

export async function getFormattedDate(date: dayjsDate) {
  await configureDayjs();
  return dayjs(date).format("DD[ de ]MMMM[ às ]HH:mm[h]");
}
