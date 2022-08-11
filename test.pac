function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*google-analytics.com/j/collect*") ||
      shExpMatch(url, "*api.growingio.com*") ||
      shExpMatch(url, "*tags.growingio.com*") ||
      shExpMatch(url, "*2022.ip138.com/index.html*")) {
    return randomProxy();
  }
  return "DIRECT"
}

function randomProxy()
{
    switch( Math.floor( Math.random() * 5 ) )
    {
        case 0:
            return "SOCKS5 18.141.235.130:10801";
            break;
        case 1:
            return "SOCKS5 18.141.235.130:10819";
            break;
        case 2:
            return "SOCKS5 18.141.235.130:10656";
            break;
        case 3:
            return "SOCKS5 18.141.235.130:10680";
            break;
        case 4:
            return "SOCKS5 18.141.235.130:10915";
            break;
    }
