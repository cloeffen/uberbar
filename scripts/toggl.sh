#!/usr/bin/bash
PATH="$PATH":/usr/local/bin

RESULTX="$(/usr/local/bin/toggl current 2>/dev/null; echo x)"
RESULT="${RESULTX%x}"
LEN=$(echo ${#RESULTX})

if [ $LEN -gt 10 ]; then
    echo $RESULT | awk -F ":" '{print $2}' | cut -f1 | awk -F "since" '{print $1}'
else
    echo No timer is running.
fi
