#!/usr/bin/env bash
set -eu

mkdir -p .claude/logs

{
  echo "=== REMINDER ==="
  date
  echo "After meaningful edits, run: lint, typecheck, test (if available), build (if needed)."
  echo
} >> .claude/logs/check-reminders.log