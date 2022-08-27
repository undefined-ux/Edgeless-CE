
import psutil
import time
import sys
class Listen_from_status():
    @staticmethod
    def listen():
        # name为需要监测进程名
        name = 'mshta.exe'
        global exist
        exist = True
        while exist:
            exist = False
            for proc in psutil.process_iter():
                if name in proc.name(): exist = True
if __name__=='__main__':
    Listen_from_status.listen()