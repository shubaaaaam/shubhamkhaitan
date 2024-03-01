<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite729b2b2bb5d29ff0ce4255c7be0ea11
{
    public static $prefixLengthsPsr4 = array (
        'G' => 
        array (
            'GoDaddy\\WordPress\\Plugins\\Launch\\' => 33,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'GoDaddy\\WordPress\\Plugins\\Launch\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Application' => __DIR__ . '/../..' . '/includes/Application.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\GoDaddy\\Styles\\StylesLoader' => __DIR__ . '/../..' . '/includes/Dependencies/GoDaddy/Styles/StylesLoader.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\BoundMethod' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/BoundMethod.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\Container' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/Container.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\ContextualBindingBuilder' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/ContextualBindingBuilder.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\EntryNotFoundException' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/EntryNotFoundException.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\RewindableGenerator' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/RewindableGenerator.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Container\\Util' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Container/Util.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Contracts\\Container\\BindingResolutionException' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Contracts/Container/BindingResolutionException.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Contracts\\Container\\CircularDependencyException' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Contracts/Container/CircularDependencyException.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Contracts\\Container\\Container' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Contracts/Container/Container.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Illuminate\\Contracts\\Container\\ContextualBindingBuilder' => __DIR__ . '/../..' . '/includes/Dependencies/Illuminate/Contracts/Container/ContextualBindingBuilder.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Psr\\Container\\ContainerExceptionInterface' => __DIR__ . '/../..' . '/includes/Dependencies/Psr/Container/ContainerExceptionInterface.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Psr\\Container\\ContainerInterface' => __DIR__ . '/../..' . '/includes/Dependencies/Psr/Container/ContainerInterface.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Dependencies\\Psr\\Container\\NotFoundExceptionInterface' => __DIR__ . '/../..' . '/includes/Dependencies/Psr/Container/NotFoundExceptionInterface.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\GoDaddyStylesServiceProvider' => __DIR__ . '/../..' . '/includes/GoDaddyStylesServiceProvider.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\Helper' => __DIR__ . '/../..' . '/includes/Helper.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\LiveSiteControl\\LiveSiteControlProvider' => __DIR__ . '/../..' . '/includes/LiveSiteControl/LiveSiteControlProvider.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\AddDomain' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/AddDomain.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\GuideItemAbstract' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/GuideItemAbstract.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\GuideItemInterface' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/GuideItemInterface.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\SEO' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/SEO.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\SiteContent' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/SiteContent.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\SiteDesign' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/SiteDesign.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\SiteInfo' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/SiteInfo.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\GuideItems\\SiteMedia' => __DIR__ . '/../..' . '/includes/PublishGuide/GuideItems/SiteMedia.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\PublishGuide\\PublishGuideServiceProvider' => __DIR__ . '/../..' . '/includes/PublishGuide/PublishGuideServiceProvider.php',
        'GoDaddy\\WordPress\\Plugins\\Launch\\ServiceProvider' => __DIR__ . '/../..' . '/includes/ServiceProvider.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite729b2b2bb5d29ff0ce4255c7be0ea11::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite729b2b2bb5d29ff0ce4255c7be0ea11::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite729b2b2bb5d29ff0ce4255c7be0ea11::$classMap;

        }, null, ClassLoader::class);
    }
}