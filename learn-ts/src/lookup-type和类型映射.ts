// NOTE: 假如后端接口的数据结构很复杂，我们只需处理其中一小部分数据
const responseData = {
  result: 1,
  data: {
    start_time: 1670774400,
    end_time: 1671119999,
    now_timestamp: 1677070684,
    to_start_timestamp: 0,
    to_end_timestamp: 0,
    status: 2,
    live_info: [
      {
        id: 395,
        title: "12.12 冬季特卖，年终抄底大攻略！",
        notice: "",
        play_url: "https://www.imooc.com/onlive/395721n8q4uer",
        live_start_time: "1670842800",
        pic: "https://img.mukewang.com/wiki/63885feb090efc1707340276.jpg",
        room_status: "revival",
        live_time: "12月12日 19:00 ~ 22:00",
      },
      {
        id: 396,
        title: "12.12 冬季特卖  超值福利嗨翻Go！",
        notice: "",
        play_url: "https://www.imooc.com/onlive/396v35f2e1du8",
        live_start_time: "1670929200",
        pic: "https://img.mukewang.com/wiki/63885ff90980a11c07340276.jpg",
        room_status: "revival",
        live_time: "12月13日 19:00 ~ 22:00",
      },
      {
        id: 397,
        title: "12.12 冬季特卖，超值福利嗨翻Go！",
        notice: "",
        play_url: "https://www.imooc.com/onlive/397pq1456fsg8",
        live_start_time: "1671015600",
        pic: "https://img.mukewang.com/wiki/6388600509a4da1e07340276.jpg",
        room_status: "revival",
        live_time: "12月14日 19:00 ~ 22:00",
      },
      {
        id: 398,
        title: "12.12 冬季特卖  超值福利嗨翻Go！",
        notice: "",
        play_url: "https://www.imooc.com/onlive/398462kah8qb1",
        live_start_time: "1671102000",
        pic: "https://img.mukewang.com/wiki/6388600e09dc19a007340276.jpg",
        room_status: "revival",
        live_time: "12月15日 19:00 ~ 22:00",
      },
    ],
  },
  msg: "",
};
// NOTE:,则可以使用类型查找方法

//NOTE: 类型映射：

type LiveInfoType = typeof responseData["data"]["live_info"][0];

type LiveInfoTypeReadonly = {
  readonly [k in keyof LiveInfoType]: LiveInfoType[k];
};

type Readonly<T> = {
  readonly [k in keyof T]: T[k];
};

type LiveInfoTypeReadonly1 = Readonly<LiveInfoType>; //<responseType>

type LiveInfoTypePartial = {
  [k in keyof LiveInfoType]?: LiveInfoType[k];
};

type Partial<T> = {
  [k in keyof T]?: T[k];
};

type LiveInfoTypePartial1 = Partial<LiveInfoType>; //<responseType>

export {};
