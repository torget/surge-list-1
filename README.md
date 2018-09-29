# surge rule-set sample
```
[Rule]
PROCESS-NAME,ss-local,DIRECT
PROCESS-NAME,Speedtest,nProxy

USER-AGENT,WeChat*,DIRECT
USER-AGENT,MicroMessenger*,DIRECT

DOMAIN-SUFFIX,lastpass.com,DIRECT
DOMAIN-SUFFIX,zaihua.io,DIRECT
DOMAIN-SUFFIX,evernote.com,Proxy
DOMAIN-SUFFIX,yinxiang.com,nProxy
DOMAIN-SUFFIX,sublimetext.com,REJECT
DOMAIN-SUFFIX,sublimehq.com,REJECT

# Rulesets
RULE-SET,SYSTEM,DIRECT
RULE-SET,https://github.com/congcong0806/surge-list/raw/master/congcong.list, Proxy
RULE-SET,https://github.com/congcong0806/surge-list/raw/master/apple.list, Apple

#scomper
RULE-SET,https://github.com/scomper/surge-list/raw/master/adblock.list, REJECT
RULE-SET,https://github.com/scomper/surge-list/raw/master/reject.list, REJECT-TINYGIF
RULE-SET,https://github.com/scomper/surge-list/raw/master/blocked.list, Proxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/cn.list, nProxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/video.list, Proxy
RULE-SET,https://github.com/scomper/surge-list/raw/master/telegram.list, Proxy

# lhie1
RULE-SET,https://github.com/lhie1/Rules/blob/master/Auto_New/reject.list, REJECT

RULE-SET,LAN,DIRECT
GEOIP,CN,nProxy
FINAL,Proxy,dns-failed
