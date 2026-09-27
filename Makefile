.PHONY: setup_mac install_homebrew install_gitleaks check_leaks install_nvm nvm_use_local nvm_lts preflight

setup_mac: install_homebrew install_gitleaks install_nvm nvm_use_local

install_homebrew:
	@which brew || /bin/bash -c "$$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

install_gitleaks: install_homebrew
	@which gitleaks || brew install gitleaks

check_leaks: install_gitleaks
	gitleaks detect --source . -v

install_nvm:
	@which nvm || brew install nvm

nvm_use_local: install_homebrew install_nvm
	@source $(HOME)/.nvm/nvm.sh && \
	nvm install && \
	nvm use && \
	nvm alias default node

nvm_lts: install_homebrew install_nvm
	@source $(HOME)/.nvm/nvm.sh && \
	nvm install --lts && \
	nvm use --lts && \
	nvm alias default node

preflight:
	npm run lint && \
	npm run pretty:check && \
	npm run build && \
	$(MAKE) check_leaks && \
	echo "Preflight checks passed"
