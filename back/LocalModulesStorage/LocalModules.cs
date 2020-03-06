using System;
using System.Collections;
using System.Collections.Generic;

namespace LocalModulesStorage
{

    public class LocalModules
    {
        private static ArrayList arr = new ArrayList();
        public static void getModule<T>(T module)
        {
            var foundedModule = arr.BinarySearch(module);
            Console.WriteLine(foundedModule);
            //var foundedModule
            //return foundedModule;
        }

        public static void setModule<T>(T module)
        {
            arr.Add(module);
        }
    }
    //public class LocalModules<T>
    //{
    //    private static T Modules;

    //    public LocalModules(T model)
    //    {
    //        Modules = model;
    //    }

    //    public static void Register<ModuleType>(ModuleType module)
    //    {
    //        var a = Modules;
    //    }

    //    //public ArrayList ResolveAll()
    //    //{
    //    //    return LocalModules;
    //    //}

    //    public Type Resolve<Type>(string title)
    //    {
    //        return Modules[0];
    //    }
    //}
}
