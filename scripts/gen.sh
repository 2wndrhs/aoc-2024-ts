#!/bin/bash

tsc scripts/gen.ts --module NodeNext && node scripts/gen.js "$@"
