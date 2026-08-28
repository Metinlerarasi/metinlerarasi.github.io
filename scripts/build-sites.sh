#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
stage_dir="$(mktemp -d)"
trap 'rm -rf "$stage_dir"' EXIT

mkdir -p "$stage_dir/client" "$stage_dir/server"

find "$project_dir" -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name '.gitignore' \
  ! -name '.openai' \
  ! -name '.sites-build' \
  ! -name 'dist' \
  ! -name 'scripts' \
  ! -name 'sites-worker.js' \
  -exec cp -R {} "$stage_dir/client/" \;

cp "$project_dir/sites-worker.js" "$stage_dir/server/index.js"

rm -rf "$project_dir/dist"
mv "$stage_dir" "$project_dir/dist"
trap - EXIT
