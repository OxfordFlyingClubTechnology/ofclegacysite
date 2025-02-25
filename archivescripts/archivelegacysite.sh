# Oxford Flying Club, Inc.
# ------------------------
# Author:  Mike Tedesco
# Created: 2/24/25
#
# Purpose: This script archives individual pages from the legacy membership website.
#
# Dependencies: WGET

rm -rf www.oxfordflyingclub.com
wget --save-cookies cookies.txt \
     --keep-session-cookies \
     --post-data 'ofcmember=Tedesco&ofcpassword=-h7gfCEVnwMw' \
     --delete-after \
     https://www.oxfordflyingclub.com/login.cgi

wget --load-cookies cookies.txt -r -p -l9 -t5 -erobots=off --wait=0.05 \
	--no-check-certificate --reject=logout.cgi --convert-links \
	--referer=https://www.oxfordflyingclub.com \
        --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36" \
	"https://www.oxfordflyingclub.com/member/members.htm"


