#!/bin/tcsh

set wait=3        #sec
set try_num=3
set timeout=3     #sec
set local_gateway="192.168.0.1"
set public_stable_server="www.google.com"
set pelion_api_server="api.us-east-1.mbedcloud.com"


while(1)
  ping -o -c ${try_num} -t ${timeout} ${local_gateway} > /dev/null
  set ret_local=$?
  ping -o -c ${try_num} -t ${timeout} ${public_stable_server} > /dev/null
  set ret_pub=$?
  ping -o -c ${try_num} -t ${timeout} ${pelion_api_server} > /dev/null
  set ret_pelion=$?
 
  echo -n `date +"%I:%M:%S"`
  echo "  local:${ret_local}, public:${ret_pub}, pelion: ${ret_pelion}"
 
  sleep ${wait}
end

