def main():
    import frida.repl
    import sys
    sys.argv = ['c2-mod-kit', '-f' ,'./comm2.exe', '-l', './c2-mod-kit.js']
    frida.repl.main()

if __name__ == '__main__':
    main()