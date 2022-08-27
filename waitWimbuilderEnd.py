
import psutil
import time
import sys
class Listen_from_status():
    @staticmethod
    def listen():
        # name为需要监测进程名
        name = 'mshta.exe'
        # 获取系统此时所有的进程名字，进程pid，进程开始时间
        for proc in psutil.process_iter():
            if name in proc.name():
                # psutil.Process()这个函数接收一个进程pid作为参数，获取进程的信息，开始时间，进程名等
                p = psutil.Process(proc.pid)
                # 判断进程的状态
                if p.status() == psutil.STATUS_RUNNING:
                    pass
                else:
                    time.sleep(30)
        return
if __name__=='__main__':
    Listen_from_status.listen()