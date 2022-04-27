import os
import subprocess

RUN_ON_CLOUD = False
dbName = "bbh"
dbInitFile = "script/init.mongo.js"

# For database
os.system("cd api")
dbRes = None
if (RUN_ON_CLOUD):
	dbRes = subprocess.run(["sudo", "mongod"])
else:
	dbRes = subprocess.run(["mongod"])
print(f"Init mongodb with exit code = {dbRes.returncode}")
os.system(f"mongo {dbName} {dbInitFile}")

# for API part
apiRes = subprocess.run(["npm", "install", "&&", "npm", "start"])
print(f"Init API server with exit code = {apiRes.returncode}")
os.system("cd ..")

# For UI part
os.system("cd ui")
uiRes = subprocess.run(["npm", "install", "&&", "npm", "run", "compile", "&&", "npm", "start"])
print(f"Init UI server with exit code = {uiRes.returncode}")

