#!/usr/bin/env bash
set -eu

mkdir -p .claude/logs

matches="$(grep -RIn --include='*.ts' --include='*.vue' '\bany\b' app server shared 2>/dev/null || true)"

if [ -n "$matches" ]; then
  {
    echo "=== TYPE WARNING ==="
    date
    echo "$matches"
    echo
  } >> .claude/logs/type-warnings.log
fi