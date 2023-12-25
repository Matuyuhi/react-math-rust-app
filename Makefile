# Makefile

.PHONY: run clean init build

# ディレクトリ構造
WASM_DIR := ./wasm
DIST_DIR := ./dist

# コマンドの定義
WASM_BUILD_CMD := wasm-pack build --target web
NPM_INSTALL_CMD := npm install
NPM_RUN_DEV_CMD := npm run dev

# ターゲット
build:
	cd $(WASM_DIR); $(WASM_BUILD_CMD); cd ../;

run: build
	$(NPM_RUN_DEV_CMD)

clean:
	rm -rf $(WASM_DIR)/pkg $(DIST_DIR)

init:
	$(NPM_INSTALL_CMD)