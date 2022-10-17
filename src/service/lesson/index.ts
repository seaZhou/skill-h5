import { hpLoginRequest } from '../index';
enum lessonApi {
  list = `api/public/lesson/list`,
  liveList = `api/public/live/list`,
}
export function LessonListRequest(params) {
  return hpLoginRequest.get({
    url: lessonApi.list,
    params,
  });
}
export function LiveListRequest(params) {
  return hpLoginRequest.get({
    url: lessonApi.liveList,
    params,
  });
}
