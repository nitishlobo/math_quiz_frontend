# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# MAKEFILE
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

.PHONY: help format-files

help:
	@echo "-----------------------------------------------------------------------------------------------------------"
	@echo "FORMATTING"
	@echo "  format-files                            format files using prettier"
	@echo "  check-formatting                        checks files have been formatted"


format-files:
	npx prettier . --write

check-formatting:
	npx prettier . --check