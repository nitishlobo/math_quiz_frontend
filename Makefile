# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# MAKEFILE
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

.PHONY: help format-files

help:
	@echo "-----------------------------------------------------------------------------------------------------------"
	@echo "FORMATTING"
	@echo "  format-files                            format files using prettier"
	@echo "  check-formatting                        checks files have been formatted"
	@echo "  run                                     run app"


format-files:
	npx prettier . --write

check-formatting:
	npx prettier . --check

run:
	npm run dev