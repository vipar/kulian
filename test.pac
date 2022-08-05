function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*bkex*") ||
      shExpMatch(url, "*google-analytics.com/j/collect*") ||
      shExpMatch(url, "*api.growingio.com*") ||
      shExpMatch(url, "*tags.growingio.com*") ||
      shExpMatch(url, "*2022.ip138.com/index.html*")) {
    return "PROXY 127.0.0.1:10809"; 
  }
  return "DIRECT"; 
}
