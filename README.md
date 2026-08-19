# CAN Lab website

This repository contains the bilingual website for the CAN Lab at McMaster University.

- Public website: <https://tiyooy.github.io/lab-website/>
- Content source: `src/docs/`
- Editing instructions: [CONTRIBUTING.md](CONTRIBUTING.md)

## Local preview

```powershell
python -m venv .venv
.\.venv\Scripts\pip.exe install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Before opening a Pull Request, run:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

中文编辑说明请见 [CONTRIBUTING.md](CONTRIBUTING.md)。
