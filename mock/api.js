
let drafts = []

let articles = [
  {title: '测试测试测试', create_date: '2020-06-07'},
  {title: '测试测试测试', create_date: '2020-06-07'},
  {title: '测试测试测试', create_date: '2020-06-07'},
]

const tags = [
  {name: ''},
]

const categories = [
  {name: '前端', en_name: 'front'},
  {name: '后端', en_name: 'back'}
]

export default {
  // 获取用户
  'GET /api/users': {
    users: [
      {name: 'bob', age: 12},
      {name: 'tom', age: 13},
      {name: 'peter', age: 14},
    ]
  },

  // 发布文章
  'POST /api/article/publish': (req, res) => {
    const newArticle = req.body
    console.log('pakizheng', newArticle)
    console.log('pakizheng', articles)
    const articleFinal = articles.filter(item => item.title !== newArticle.title)
    articleFinal.push(newArticle)
    articles = articleFinal
    console.log('pakizheng', articleFinal)
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(articleFinal));
  },

  // 保存草稿
  'POST /api/article/save': (req, res) => {
    drafts.push(req.body)
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(drafts));
  },

  // 获取文章列表
  'GET /api/admin/getArticles': {
    data: articles
  },

  // 获取草稿列表
  'GET /api/admin/getDrafts': {
    data: drafts
  }
};
