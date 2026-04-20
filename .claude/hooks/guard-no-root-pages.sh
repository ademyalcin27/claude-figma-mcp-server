#!/usr/bin/env bash
set -eu

mkdir -p .claude/logs

if [ -d "pages" ]; then
  {
    echo "=== STRUCTURE WARNING ==="
    date
    echo "Root pages/ directory exists. This project should use app/pages/ for Nuxt 4."
    echo
  } >> .claude/logs/structure-warnings.log
fi