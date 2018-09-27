# surge rule-set sample
```
[Rule]
DOMAIN-SUFFIX,lastpass.com,DIRECT
DOMAIN-SUFFIX,zaihua.io,DIRECT
DOMAIN-SUFFIX,evernote.com,Proxy
DOMAIN-SUFFIX,yinxiang.com,nProxy
DOMAIN-SUFFIX,sublimetext.com,REJECT
DOMAIN-SUFFIX,sublimehq.com,REJECT
PROCESS-NAME,ss-local,DIRECT
PROCESS-NAME,Speedtest,nProxy
# Apple
PROCESS-NAME,storedownloadd,DIRECT // Mac App Store
USER-AGENT,com.apple.appstored*,DIRECT // iOS App Store
DOMAIN,xp.apple.com,Proxy // iOS & macOS System Upgrade
DOMAIN,iosapps.itunes.apple.com,DIRECT
DOMAIN-SUFFIX,store.apple.com,DIRECT

# Rulesets
RULE-SET,SYSTEM,DIRECT
RULE-SET,https://github.com/congcong0806/surge-list/raw/master/congcong.list, Proxy
RULE-SET,https://github.com/congcong0806/surge-list/raw/master/apple.list,Apple
RULE-SET,https://github.com/scomper/surge-list/raw/master/adblock.list,REJECT
RULE-SET,https://github.com/scomper/surge-list/raw/master/reject.list, REJECT-TINYGIF
RULE-SET,https://github.com/scomper/surge-list/raw/master/cn.list, nProxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/blocked.list, Proxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/netflix.list, Proxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/telegram.list, Proxy
RULE-SET,LAN,DIRECT
# GeoIP CN
GEOIP,CN,DIRECT
FINAL,Proxy,dns-failed
