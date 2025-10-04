const blacklist = ["友站名称1", "友站名称2", "友站名称3"];
const path = "friend.json";

function genFriendJSON(locals) {
  var friends = [];
  var data = locals.data.link;
  data.forEach((entry, index) => {
    let lastIndex = 2;
    if (index < lastIndex) {
      const filteredLinkList = entry.link_list.filter(
        (linkItem) => !blacklist.includes(linkItem.name)
      );
      friends = friends.concat(filteredLinkList);
    }
  });
  const friendData = {
    friends: friends.map((item) => {
      return [item.name, item.link, item.avatar];
    }),
  };
  console.log("friend.json 文件已生成。");
  return [
    {
      path: path,
      data: JSON.stringify(friendData, null),
    },
  ];
}

hexo.extend.generator.register("friend_circle", genFriendJSON);