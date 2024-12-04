#!/bin/bash

DAY=$1
PART=$2

tsc && node dist/$DAY/$PART.js