import { hpLoginRequest } from '../index';
enum lessonApi {
  list = 'api/public/lesson/list',
}
export function LessonListRequest(params) {
  return hpLoginRequest.get({
    url: lessonApi.list,
    params,
  });
}
