yarn build:replace-pkg
yarn clean && yarn build && yarn workspaces foreach run publish:stable
yarn build:revert-replace-pkg
