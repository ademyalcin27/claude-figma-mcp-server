#!/usr/bin/env bash
set -eu

mkdir -p .claude/logs

{
  echo "=== SESSION STOP ==="
  date
  echo "Git status:"
  git status --short 2>/dev/null || true
  echo
} >> .claude/logs/session.log