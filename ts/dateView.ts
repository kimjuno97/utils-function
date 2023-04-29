import dayjs, { ConfigType } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";

dayjs.extend(utc);
dayjs.locale("ko");
dayjs.extend(relativeTime);

function dateView(date: ConfigType): string {
	return dayjs().to(dayjs(date).utc().format("YYYY-MM-DD HH:mm:ss"));
}

export default dateView;
