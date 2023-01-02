module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/this_is_me/'
      : '/'
  }