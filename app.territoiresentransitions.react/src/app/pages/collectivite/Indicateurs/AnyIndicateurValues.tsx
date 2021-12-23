import React, {useEffect, useState} from 'react';
import {useCollectiviteId} from 'core-logic/hooks';
import {Editable} from 'ui/shared';
import {AnyIndicateurRepository} from 'core-logic/api/repositories/AnyIndicateurRepository';

// Here we take advantage of IndicateurPersonnaliseValue and IndicateurValue
// having the same shape.

/**
 * Use IndicateurValuesStorageInterface + year to read/write an indicateur value
 */
const AnyIndicateurValueInput = ({
  year,
  indicateurId,
  repo,
  borderColor = 'gray',
}: {
  year: number;
  indicateurId: string;
  repo: AnyIndicateurRepository;
  borderColor?: 'blue' | 'gray';
}) => {
  const collectiviteId = useCollectiviteId()!;
  const [inputValue, setInputValue] = useState<string | number>('');

  useEffect(() => {
    repo
      .fetchIndicateurForIdForYear({collectiviteId, indicateurId, year})
      .then(indicateurValueRead => {
        setInputValue(indicateurValueRead?.valeur || '');
      });
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;

    const floatValue = parseFloat(inputValue.replace(',', '.'));
    repo.save({
      indicateur_id: indicateurId,
      valeur: floatValue,
      collectivite_id: collectiviteId,
      annee: year,
    });

    setInputValue(floatValue ? floatValue.toString() : '');
  };

  return (
    <label className="flex flex-col mx-2 j">
      <div className="flex pl-2 justify-center">{year}</div>
      <input
        className={`text-right fr-input mt-2 w-full bg-white p-3 border-b-2 text-sm font-normal text-gray-500 ${
          borderColor === 'blue' ? 'border-bf500' : 'border-gray-500'
        }`}
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
};

/**
 * Display a range of inputs for every indicateur yearly values.
 */
export const AnyIndicateurValues = (props: {
  indicateurUid: string;
  repo: AnyIndicateurRepository;
  borderColor?: 'blue' | 'gray';
}) => {
  const min = 2008;
  const stride = 2;
  const window = 7;
  const [index, setIndex] = useState<number>(4);

  const years = Array.from(
    {length: window},
    (v, k) => k + min + stride * index
  );

  return (
    <div className="flex row items-center h-full text-center">
      <button
        className="fr-fi-arrow-left-line fr-btn--icon-left"
        onClick={e => {
          e.preventDefault();
          setIndex(index - 1);
        }}
        disabled={index < 1}
      />
      <div className="flex row items-center">
        {years.map(year => (
          <AnyIndicateurValueInput
            year={year}
            repo={props.repo}
            indicateurId={props.indicateurUid}
            key={`${props.indicateurUid}-${year}`}
            borderColor={props.borderColor}
          />
        ))}
      </div>
      <button
        className="fr-fi-arrow-right-line fr-btn--icon-left pl-4"
        onClick={e => {
          e.preventDefault();
          setIndex(index + 1);
        }}
      />
    </div>
  );
};

/**
 * Expand Panel with range of value inputs as details
 */
export const AnyIndicateurEditableExpandPanel = (props: {
  indicateurUid: string;
  repo: AnyIndicateurRepository;
  title: string;
  editable?: boolean;
  borderColor?: 'blue' | 'gray';
}) => (
  <div className="CrossExpandPanel">
    <details>
      <summary className="title">
        {props.editable ? (
          <Editable text={props.title} />
        ) : (
          <div>{props.title}</div>
        )}
      </summary>{' '}
      <div>
        <AnyIndicateurValues
          borderColor={props.borderColor}
          repo={props.repo}
          indicateurUid={props.indicateurUid}
        />
      </div>
    </details>
  </div>
);
