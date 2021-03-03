import {basename, dirname, normalize, Path, strings} from "@angular-devkit/core";
import {
    apply,
    chain,
    externalSchematic,
    MergeStrategy,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    template,
    Tree,
    url,
} from '@angular-devkit/schematics';

export function subscriptionComponent(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {

        _options.name = basename(_options.name as Path);
        _options.path = normalize('/' + dirname((_options.path + '/' + _options.name) as Path));

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                }),
                move(_options.path as string),
            ]);

        return chain([
            externalSchematic('@schematics/angular', 'component', _options),
            mergeWith(templateSource, MergeStrategy.Overwrite),
        ]);
    };
}
